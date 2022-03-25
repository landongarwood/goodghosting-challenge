import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Contract } from "web3-eth-contract"

@Injectable()
export class BaseService {
  protected ggContract: Contract;

  constructor(private readonly configService: ConfigService) {
    this.ggContract = this.configService.get('ggContract');
  }
}
