import { Controller, Post, Req, Res } from '@nestjs/common';
import { ImageUploadService } from './image-upload.service';
import { request } from 'https';

@Controller('fileUpload')
export class ImageUploadController {
    constructor(private readonly imageUploadService: ImageUploadService) {}

    @Post()
    async create(@Req() request, @Res() response) {
        try {
            await this.imageUploadService.fileupload(request, response);
        } catch (error) {
            return response.status(500).json(`Failed to upload image file: ${error.message}`);
        }
    }
}
