from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseRedirect
from .models import ImageLoader
from .form import ImageLoaderForm

def upload(request):
    form = ImageLoaderForm(request.POST, request.FILES)
    if form.is_valid():
        form.save()
        return redirect("images")
    context = {'form': form}
    return render(request, 'index.html', context)

def images(request):
    images = ImageLoader.objects.all()
    context = {"images": images}
    return render(request, "show.html", context)

def image_delete(request, pk):
    try:
        image_data = ImageLoader.objects.get(id=pk)
        if image_data != None:
            image_data.delete()
        return redirect("upload")
    except:
        return HttpResponse("Error when deleting")
