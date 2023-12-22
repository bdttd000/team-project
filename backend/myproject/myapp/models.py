from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    
    pass

class Image(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to='images/')
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)

    def __str__(self):
        return self.title

class UserInfo(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    surname = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    phone = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    avatar = models.ImageField(upload_to='images/')

class UserReactionType(models.Model):
    name = models.CharField(max_length=255)

class UserReactions(models.Model):
    publication = models.ForeignKey('Publications', on_delete=models.CASCADE)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    reaction_type = models.OneToOneField(UserReactionType, on_delete=models.CASCADE)
    value = models.IntegerField()
    creation_date = models.DateTimeField(auto_now_add=True)

class UserComments(models.Model):
    publication = models.ForeignKey('Publications', on_delete=models.CASCADE)
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    publication_info_id = models.ForeignKey('PublicationInfo', on_delete=models.CASCADE)
    is_acitve = models.BooleanField()
    creation_date = models.DateTimeField(auto_now_add=True)

class Categories(models.Model):
    publication = models.ForeignKey('Publications', on_delete=models.CASCADE)
    name = models.CharField(max_length=255)

class PublicationInfo(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    avatar = models.ImageField(upload_to='images/')
    directory_url = models.FilePathField(path=None, match=None, recursive=False, max_length=100)

class UploadType(models.Model):
    name = models.CharField(max_length=255)

class Uploads(models.Model):
    publication_info_id = models.ForeignKey(PublicationInfo, on_delete=models.CASCADE)
    upload_type = models.OneToOneField(UploadType, on_delete=models.CASCADE)
    path = models.FilePathField(path=None, match=None, recursive=False, max_length=100)

class Publications(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    publication_info_id = models.OneToOneField(PublicationInfo, on_delete=models.CASCADE)
    category_id = models.ForeignKey(Categories, on_delete=models.CASCADE)
    is_acitve = models.BooleanField()
    creation_date = models.DateTimeField(auto_now_add=True)



