# AWS RDS MySQL 

## Overview 
- AWS database identifier name: `deals-db`
- Database name: `deals`
- 

## Hosting
- Endpoint: deals-db.cgbdvenaohw2.us-east-1.rds.amazonaws.com_–
- Port: 3306
- VPC: vpc-c802edb5
- Publically accessible (for testing)

## DBMS Setup 
- Local MySQL Community Workbench

## Networking
- Publically Accessible 

## Instances

### Deals
- Name: `deals-db`
- Admin account name: `admin`
- Admin account pwd: `normal (no special chars)[DEA]`
- Version: MySQL Community 5.7.24

## Security

### SSL
- Uses Open SSL, so expired server certificate doesn't prevent successful connections unless the `required` SSL mode is specified


#### Resources 
- https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/ssl-certificate-rotation-mysql.html


- https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL.html


## Setup
- Adding inbound rule to ACL for accessing db instance from my public IP (107.0.28.91/32)
  - Todo: modify this as needed. 
  - https://medium.com/@ryanzhou7/connecting-a-mysql-workbench-to-amazon-web-services-relational-database-service-36ae1f23d424
- Modified security group associated with db instance
  - Added my public IP to inbound allowed

107.197.28.91/32