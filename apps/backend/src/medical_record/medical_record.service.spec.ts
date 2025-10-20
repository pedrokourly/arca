import { Test, TestingModule } from '@nestjs/testing';
import { MedicalRecordService } from './medical_record.service';

describe('MedicalRecordService', () => {
  let service: MedicalRecordService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MedicalRecordService],
    }).compile();

    service = module.get<MedicalRecordService>(MedicalRecordService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
