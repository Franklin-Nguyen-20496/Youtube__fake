import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { VIDEO } from '../../Model/video/video';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    }),
};

@Injectable({
    providedIn: 'root',
})
export class VideosService {
    private apiURL: string = 'http://localhost:3004/videos';

    constructor(private http: HttpClient) { }

    getVideos(): Observable<VIDEO[]> {
        return this.http.get<VIDEO[]>(this.apiURL);
    }

    getVideoByID(id: any): Observable<VIDEO> {
        const url = `${this.apiURL}/${id}`;
        return this.http.get<VIDEO>(url);
    }

    createVideo(video: Object): Observable<VIDEO> {
        return this.http.post<VIDEO>(this.apiURL, video, httpOptions);
    }

    getVideosByUser(id: number): Observable<VIDEO[]> {
        const url = `${this.apiURL}/auth?auth=${id}`;
        return this.http.get<VIDEO[]>(url);
    }

    deleteVideo(id: number): Observable<VIDEO> {
        const url = `${this.apiURL}/${id}`;
        return this.http.delete<VIDEO>(url);
    }
}
