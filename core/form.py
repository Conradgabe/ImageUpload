from django import forms
from .models import ImageLoader

class ImageLoaderForm(forms.ModelForm):
    class Meta:
        model = ImageLoader
        fields = "__all__"