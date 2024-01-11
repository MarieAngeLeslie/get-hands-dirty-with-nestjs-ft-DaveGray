import { Body, Controller, Get, Header, HttpCode, Param, Post, Req } from '@nestjs/common';
import { CreateDto } from './create.cats.dto';

@Controller('cats')
export class CatsController {
    @Post()
    @HttpCode(204)
    @Header('cache-controle', 'none')
    async create(@Body() createDto: CreateDto) {
        return "this action add new cats"
    }

    @Get(':id')
    findOne(@Param('id') id: string): string {
        console.log(id);
        return `Le #${id} ème cat a été trouvé`
    }

    @Get()
    findAll(@Req() request: Request): string {
        return "this action returns all cats___";
    }
}
