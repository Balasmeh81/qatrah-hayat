import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { AutofocusDirective } from "src/app/core/directives/auto-focus-directive";

export const SharedForAuth = [
  CommonModule,
  ReactiveFormsModule,
  TranslateModule,
  RouterLink,
  AutofocusDirective
];
