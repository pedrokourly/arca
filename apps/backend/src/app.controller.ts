
import { Controller, Get} from '@nestjs/common';

@Controller()
export class AppController {
    @Get()
    healthCheck(){
        return { 
            service: 'arca-backend',
            status: 'ok',
        };
    }
}