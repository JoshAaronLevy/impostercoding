import {
  Component,
  ViewEncapsulation,
  OnDestroy,
  OnInit,
  signal,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { map, take } from 'rxjs/operators';
import { firstValueFrom } from 'rxjs';
import { butterService, HighlightService } from '@/app/services';
import { HeroComponent } from '@app/components/hero/hero.component';

@Component({
  selector: 'app-post',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  providers: [HighlightService],
  imports: [CommonModule, HeroComponent],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit, OnDestroy {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private highlightService = inject(HighlightService);
  private title = inject(Title);
  private meta = inject(Meta);

  post: any;
  tags: any[] = [];
  tag: any;
  loading = signal(true);
  showData = signal(false);

  step1 = signal(true);
  step2 = signal(false);
  step3 = signal(false);
  step4 = signal(false);

  async ngOnInit() {
    document.body.classList.add('profile-page');
    this.showData.set(false);
    this.step1.set(true);
    this.progressLoaderOne();
  }

  ngOnDestroy() {
    document.body.classList.remove('profile-page');
  }

  private progressLoaderOne() {
    setTimeout(() => {
      this.step1.set(false);
      this.step2.set(true);
      this.fetchPost();
    }, 150);
  }

  private progressLoaderTwo() {
    setTimeout(() => {
      this.step3.set(false);
      this.step4.set(true);
      this.progressLoaderThree();
    }, 150);
  }

  private progressLoaderThree() {
    setTimeout(() => this.displayData(), 150);
  }

  private async fetchPost() {
    const slug$ = this.route.paramMap.pipe(map(params => params.get('slug')));
    try {
      const slug: any = await firstValueFrom(slug$.pipe(take(1)));
      if (slug) {
        const res: any = await butterService.post.retrieve(slug);
        this.post = res?.data?.data;
        this.step2.set(false);
        this.step3.set(true);
        this.updateMetaData();
        this.progressLoaderTwo();
      }
    } catch (err) {
      console.error(err);
    }
  }

  private updateMetaData() {
    const data: any = this.post;
    if (data?.title) {
      this.title.setTitle(`${data.title} - Imposter Coding`);
      this.meta.updateTag({
        name: 'description',
        content: `${data.title} - Imposter Coding`,
      });
    }
  }

  displayData() {
    if (this.post) {
      this.step4.set(false);
      this.loading.set(false);
      this.showData.set(true);
      setTimeout(() => this.highlightService.highlightAll(), 50);
    }
  }

  selectTag(tag: { slug: string }) {
    this.tag.set(tag.slug);
    localStorage.setItem('tag', tag.slug);
    this.router.navigate(['/tag/', tag.slug]);
  }
}
