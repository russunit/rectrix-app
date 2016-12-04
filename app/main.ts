import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from "./app.module";

import { CurrentUserService } from "./shared/current-user/current-user.service"


platformNativeScriptDynamic().bootstrapModule(AppModule);
