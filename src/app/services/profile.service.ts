import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  // Username do GitHub (extraído do link na home)
  private readonly githubUsername = 'YanViniciusSilva';

  // API pública do GitHub
  private readonly githubApiUrl = `https://api.github.com/users/${this.githubUsername}`;

  // Foto local como fallback
  private readonly fallbackPhoto = 'assets/me.jpeg';

  constructor(private http: HttpClient) {}

  /**
   * Busca a foto do perfil do GitHub
   * A API do GitHub é pública e não requer autenticação para dados básicos
   * Retorna a foto local como fallback em caso de erro
   */
  getProfilePhoto(): Observable<string> {
    return this.http.get<any>(this.githubApiUrl).pipe(
      map((response) => {
        // A foto do GitHub vem no campo 'avatar_url'
        if (response && response.avatar_url) {
          console.log('✅ Foto do GitHub carregada com sucesso');
          return response.avatar_url;
        }
        console.warn('⚠️ Resposta da API não contém foto. Usando foto local.');
        return this.fallbackPhoto;
      }),
      catchError((error) => {
        console.error('❌ Erro ao buscar foto do GitHub:', error);
        console.log('📸 Usando foto local como fallback');
        return of(this.fallbackPhoto);
      })
    );
  }
}
