import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller()
export class AppController {
    @ApiOperation({ summary: 'Healthcheck' })
    @ApiResponse({ status: 200, description: 'API is healthy' })
    @Get()
    healthCheck() {
        return {
            service: 'arca-backend',
            status: 'ok',
        };
    }
}
