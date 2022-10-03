import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class registro_users extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    LastName: string;

    @Column()
    Name: string;

    @Column()
    isMilitar: boolean;

    @Column()
    TimeCreate: Date;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    email: string;

    @Column()
    emailVerified: string;

    @Column()
    verificationToken: string;

    @Column()
    isTemporal: boolean;

}