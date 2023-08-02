import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {
  BehaviorSubject,
  Observable,
  catchError,
  of,
  switchMap,
  throwError,
} from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { IPictures, IUnpslashRes } from '../models/unsplash.model';

@Injectable({
  providedIn: 'root',
})
export class UnsplashAPIService {
  private unsplashImages$ = new BehaviorSubject<IPictures[]>([]);

  constructor(private http: HttpClient) {}

  getImage(): Observable<IPictures[]> {
    return this.unsplashImages$.asObservable();
  }

  searchImage(image: string): void {
    const headers: HttpHeaders = new HttpHeaders({
      Authorization: `Client-ID ${environment.unsplashkey}`,
    });
    const params: HttpParams = new HttpParams({
      fromObject: { page: 1, query: image },
    });

    this.http
      .get<IUnpslashRes>('https://api.unsplash.com/search/photos', {
        headers: headers,
        params: params,
      })
      .pipe(
        switchMap((res) =>
          of(
            res.results.map((result) => ({
              id: result.id,
              src: result.urls.small,
              name: `${result.description}  ${result.alt_description}`,
            }))
          )
        ),
        catchError((error) => {
          return throwError(() => new Error(error));
        })
      )
      .subscribe({
        next: (images: IPictures[]) => this.unsplashImages$.next(images),
      });
  }
}
