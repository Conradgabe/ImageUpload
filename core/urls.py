from django.urls import path
from . import views

urlpatterns = [
    path('', views.upload, name="upload"),
    path('image/', views.images, name="image"),
    path('delete/<int:pk>/', views.image_delete, name="image-delete"),
    path('load/', views.loading, name = "loading"),
]