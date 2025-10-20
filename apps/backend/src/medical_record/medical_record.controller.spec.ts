import { Test, TestingModule } from '@nestjs/testing';
import { MedicalRecordController } from './medical_record.controller';
import { MedicalRecordService } from './medical_record.service';

describe('MedicalRecordController', () => {
  let controller: MedicalRecordController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MedicalRecordController],
      providers: [MedicalRecordService],
    }).compile();

    controller = module.get<MedicalRecordController>(MedicalRecordController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
