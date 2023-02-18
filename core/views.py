from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseRedirect
from .models import ImageLoader

def upload(request):
    pics = request.FILES.get("pictures")
    if pics:
        pics_save = ImageLoader.objects.create(image_field=pics)
        pics_save.save()
        return redirect("image")
    context = {'form': pics}
    return render(request, 'index.html', context)

def images(request):
    images = ImageLoader.objects.all()
    image_list = []
    for image in images:
        image_list.append(image)
    image_value = image_list[-1]

    context = {"image_value": image_value}
    return render(request, "show.html", context)

def image_delete(request, pk):
    try:
        image_data = ImageLoader.objects.get(id=pk)
        if image_data != None:
            image_data.delete()
        return redirect("upload")
    except:
        return HttpResponse("Error when deleting")

def loading(request):
    return render(request, "uploading.html")
