import { Column, Entity} from 'typeorm';
import Model from './model.entity';

@Entity('customers')
export class Customer extends Model {
  @Column()
  name: string

  @Column()
  cpf: string

  @Column({name: 'favorite_color'})
  favoriteColor: string

  @Column({nullable: true})
  comments?: string
}