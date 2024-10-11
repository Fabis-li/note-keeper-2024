import { EnvironmentProviders, makeEnvironmentProviders } from "@angular/core";
import { NotificacaoService } from "./notificacao.service";
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from "@angular/material/snack-bar";

export const provideNotifications = (): EnvironmentProviders => {
  return makeEnvironmentProviders([
    //configuração de injeção de dependência
    {
      provide:MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue:{
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center',
      }
    },

    NotificacaoService
  ])
}
