import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit {

  private facebookLink: string =
    'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fanjeyy.github.io%2F&amp;src=sdkpreparse';
  private tweetLink: string = 'https://twitter.com/intent/tweet';
  homepageLink: string = 'https://anjeyy.github.io/';

  private seconds: number = 1000;
  private durationInSeconds: number = 1.5 * this.seconds;

  constructor(private matSnackBar: MatSnackBar) {}

  ngOnInit(): void {}

  goToLinkWithNewTab(url: string): void {
    window.open(url, '_blank');
  }

  shareLinkOnFacebook(): void {
    this.goToLinkWithNewTab(this.facebookLink);
  }

  prePopulateTwitterMessage(): string {
    const message: string = `?text=Check out Andjelko\'s homepage - Passionate software engineer with an interesting profile ${this.homepageLink}.`;
    return this.tweetLink.concat(message);
  }

  showCopiedInfo(): void {
    this.matSnackBar.open('homepage link copied to clipboard', 'dismiss', {
      duration: this.durationInSeconds,
    });
  }

}
