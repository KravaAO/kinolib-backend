import { Controller, Get, Param } from '@nestjs/common'
import { ParseService } from './parse.service'
import { Tab, MediaResponse, Media } from './types'

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

    @Get('/serials/:page')
    async fetchSerials(@Param('page') page = '1'): Promise<MediaResponse> {
        return await this.parseService.fetchSerial(`https://uaserial.club/serial/${page}`);
    }
}
