
//What is your S3 bucket name? Pass in with "-var 's3_bucket=<bucketname>" or change default value. Also pass default error_document and index_document
variable "s3_bucket" {
    default = "your-test-bucket"
}
variable "index_document"{
    default = "index.html"

}
variable "error_document" {
    default = "error.js"

}


// Setting credentials and custom profile to AWS. Make sure you have an .aws credentials file
provider "aws" {
  profile    = "personal"
  region     = "us-east-1"
}

resource "aws_s3_bucket" "react_bucket" {
  bucket = "${var.s3_bucket}"
  acl    = "public-read"
  
  policy = <<EOF
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::${var.s3_bucket}/*"
        }
    ]
}
EOF

  website {
    index_document = "${var.index_document}"
    error_document = "${var.error_document}"
  }
}
output "website_domain" {
  value = "${aws_s3_bucket.react_bucket.website_domain}"
}

output "website_endpoint" {
  value = "${aws_s3_bucket.react_bucket.website_endpoint}"
}
