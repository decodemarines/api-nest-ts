import { Controller, Post, Body, Get, Param, Delete, Patch, HttpCode } from '@nestjs/common';
import { FindPageDto } from './dto/find-page.dto';
import { PageModel } from './page.model';

@Controller('page')
export class PageController {
    @Post('create')
    async create(@Body() dto: Omit<PageModel, '_id'>) {}

    @Get('get/:alias')
    async get(@Param('alias') alias: string) {}

    @Delete(':id')
    async delete(@Param('id') id: string) {}

    @Patch(':id')
    async patch(@Param('id') id: string, @Body() dto: PageModel) {}

    @HttpCode(200)
    @Post()
    async findTop(@Body() dto: FindPageDto) {}
}
