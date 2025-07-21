import {
  Component,
  ViewEncapsulation,
  OnInit,
  OnDestroy,
  signal,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { firstValueFrom } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { butterService, HighlightService } from '@/app/services';
import { HeroComponent } from '@app/components/hero/hero.component';

@Component({
  selector: 'app-post',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule, HeroComponent],
  providers: [HighlightService],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit, OnDestroy {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly meta = inject(Meta);
  private readonly title = inject(Title);
  private readonly highlightService = inject(HighlightService);

  readonly loading = signal(true);
  readonly showData = signal(false);
  readonly post = signal<any>(null);

  ngOnInit(): void {
    document.body.classList.add('profile-page');
    this.fetchPost();
  }

  ngOnDestroy(): void {
    document.body.classList.remove('profile-page');
  }

  private async fetchPost(): Promise<void> {
    try {
      const slug = await firstValueFrom(
        this.route.paramMap.pipe(map(params => params.get('slug')), take(1))
      );

      if (!slug) return;

      const res = await butterService.post.retrieve(slug);
      const data = res?.data?.data;

      if (data) {
        this.post.set(data);
        this.updateMetaData(data);
        this.loading.set(false);
        this.showData.set(true);

        setTimeout(() => this.highlightService.highlightAll(), 50);
      }
    } catch (err) {
      console.error('Failed to fetch post:', err);
      this.loading.set(false);
    }
  }

  private updateMetaData(post: any): void {
    if (!post?.title) return;

    this.title.setTitle(`${post.title} - Imposter Coding`);
    this.meta.updateTag({
      name: 'description',
      content: `${post.title} - Imposter Coding`,
    });
  }

  selectTag(tag: { slug: string }): void {
    localStorage.setItem('tag', tag.slug);
    this.router.navigate(['/tag', tag.slug]);
  }
}
