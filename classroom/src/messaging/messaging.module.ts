import { Module } from '@nestjs/common';
import { PurchasesController } from './controllers/purchases.controller';
import { EnrollmentsService } from '../services/enrollments.service';
import { StudentsService } from '../services/students.service';
import { CoursesService } from '../services/courses.service';
import { DatabaseModule } from '../database/database.module';

// HTTP (MVC)

@Module({
  imports: [DatabaseModule],
  controllers: [PurchasesController],
  providers: [StudentsService, CoursesService, EnrollmentsService],
})
export class MessagingModule {}
