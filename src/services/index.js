import ArticleService from './article/article.service';
import AuthService from './auth/auth.service';

/* This index serves as provider */
export let authService = new AuthService();
export let articleService = new ArticleService();