import { Controller, Post, Body, Get, Param, Delete, HttpException, HttpStatus, UsePipes, ValidationPipe, UseGuards } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { ReviewService } from './review.service';
import { REVIEW_NOT_FOUND } from './review.constants';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { UserEmail } from 'src/decorators/user-email.decorator';

@Controller('review')
export class ReviewController {
    constructor(private readonly reviewService: ReviewService) {}

    @UsePipes(new ValidationPipe())
    @Post('create')
    async create(@Body() dto: CreateReviewDto) {
        return this.reviewService.create(dto);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async delete(@Param('id') id: string) {
        const delDoc = await this.reviewService.delete(id);
        if (!delDoc) {
            throw new HttpException(REVIEW_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    // @UseGuards(JwtAuthGuard) // to test: http://localhost:3000/api/review/byProduct/98458248263
    @UseGuards(JwtAuthGuard)
    @Get('byProduct/:productId')
    async getByProduct(@Param('productId') productId: string, @UserEmail() email: string) {
        console.log('email:', email);
        return this.reviewService.findByProductId(productId);
    }
}
