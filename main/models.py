from django.db import models

# Create your models here.


class ContactInfo(models.Model):
    contact_first_name = models.CharField(max_length=200)
    contact_last_name = models.CharField(max_length=200)
    contact_organization = models.CharField(max_length=200)
    contact_email = models.EmailField()
    contact_number = models.CharField(max_length=200)
    contact_description = models.TextField()
