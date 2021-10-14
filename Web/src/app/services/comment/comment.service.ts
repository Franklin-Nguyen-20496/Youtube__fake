import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';

import { comment, responseComment } from '../../Model/comment/comment';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    }),
};

@Injectable({
    providedIn: 'root',
})
export class CommentService {
    private apiCommentURL: string = 'http://localhost:3004/comments';
    private apiResponseCommentURL: string =
        'http://localhost:3004/responseComments';

    constructor(private http: HttpClient) { }

    getCommentByID(id: number): Observable<comment> {
        const url = `${this.apiCommentURL}/${id}`;
        return this.http.get<comment>(url);
    }

    getResponseCommentByID(id: number): Observable<responseComment> {
        const url = `${this.apiResponseCommentURL}/${id}`;
        return this.http.get<responseComment>(url);
    }

    getCommentsForVideo(id: number): Observable<comment[]> {
        const url = `${this.apiCommentURL}/find/?video=${id}`;
        return this.http.get<comment[]>(url);
    }

    getResponseCommentsForComment(id: number): Observable<responseComment[]> {
        const url = `${this.apiResponseCommentURL}/find/?commentId=${id}`;
        return this.http.get<responseComment[]>(url);
    }

    createComment(comment: Object): Observable<any> {
        return this.http.post(this.apiCommentURL, comment, httpOptions);
    }

    createResponseComment(responseComment: Object): Observable<any> {
        return this.http.post(
            this.apiResponseCommentURL,
            responseComment,
            httpOptions,
        );
    }

    private responseComment!: responseComment;
    private subject: Subject<any> = new Subject();

    getResponseComment(responseComment: responseComment): void {
        this.responseComment = responseComment;
        this.subject.next(this.responseComment);
    }

    handleWhenGetResponseComment(): Observable<any> {
        return this.subject.asObservable();
    }

    deleteComment(id: number): Observable<any> {
        const url = `${this.apiCommentURL}/${id}`;
        return this.http.delete(url);
    }

    deleteResponseComment(id: number): Observable<any> {
        const url = `${this.apiResponseCommentURL}/${id}`;
        return this.http.delete(url);
    }
}
