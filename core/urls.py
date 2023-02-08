from django.urls import path
from . import views

urlpatterns = [
    path('', views.upload, name="upload"),
    path('images/', views.images, name="images"),
    path('<str:pk>/', views.image_delete, name="image-delete"),
]