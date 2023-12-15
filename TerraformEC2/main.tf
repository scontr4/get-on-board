terraform {

  required_providers {
    aws = {
      source = "hashicorp/aws"
      version = "~> 4.0"
    }
  }

}

provider "aws" {
  region =  "YOUR_REGION"
  access_key = "YOUR_ACCESS_KEY"
  secret_key = "YOUR_SECRET_KEY"
}

resource "tls_private_key" "rsa_4096" {
  algorithm = "RSA"
  rsa_bits  = 4096
}

variable "key_name" {}

resource "aws_key_pair" "key_pair" {
  key_name   = var.key_name
  public_key = tls_private_key.rsa_4096.public_key_openssh
}

resource "local_file" "private_key" {
  content = tls_private_key.rsa_4096.private_key_pem
  filename = var.key_name
}

resource "aws_instance" "public_instance" {
  ami           = "YOUR_ECS_INSTANCE_AMI"
  instance_type = "t2.micro"
  key_name = aws_key_pair.key_pair.key_name
  subnet_id     = "subnet-YOUR_SUBNET"
  vpc_security_group_ids = ["sg-YOUR_SECURITY_GROUP"] 


  tags = {
    Name = "public_instance"
  }
}