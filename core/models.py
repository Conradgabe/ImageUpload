from django.db import models

class ImageLoader(models.Model):
    image_field = models.ImageField(upload_to="images/")
    
    class Meta:
        verbose_name = "image"
        verbose_name_plural = "images"

    def __str__(self):
        return self.image_field.url