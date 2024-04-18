import { Controller, Get, Param, Query } from "@nestjs/common";
import { ParseService } from './parse.service'
import { Tab, MediaResponse, Media } from "./types";

@Controller('parse')
export class ParseController {
    constructor(private readonly parseService: ParseService) {}

    @Get('/')
    async fetchTabs(): Promise<Tab[]> {
        const html = await this.parseService.fetchContent()
        const parsedData = this.parseService.parseTabs(html)
        return parsedData
    }

    @Get('/all/:page')
    async fetchAll(@Param('page') page = '1'): Promise<MediaResponse> {
        return await this.parseService.fetchMedia(`https://uaserial.club/${page}`)
    }

    @Get('/series/:page')
    async fetchSerials(@Param('page') page = '1'): Promise<MediaResponse> {
        return await this.parseService.fetchMedia(`https://uaserial.club/serial/${page}`)
    }

    @Get('/anime/:page')
    async fetchAnime(@Param('page') page = '1'): Promise<MediaResponse> {
        return await this.parseService.fetchMedia(`https://uaserial.club/anime/${page}`)
    }

    @Get('/cartoon-movie/:page')
    async fetchCartoons(@Param('page') page = '1'): Promise<MediaResponse> {
        return await this.parseService.fetchMedia(`https://uaserial.club/cartoon-movie/${page}`)
    }

    @Get('/search/:query')
    async searchMedia(@Query('query') query: string): Promise<Media[]> {
        return await this.parseService.searchMedia(query)
    }
}
