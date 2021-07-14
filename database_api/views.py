from django.shortcuts import render
from django.http import HttpResponse

def index(request):
	return HttpResponse("<h1>Home page.</h1>")

def home(request, id):
	if(id == "bspr"):
		tag = "Ruthvik"
		return render(request, "database_api/home.html", {"name":tag, "id":id})
	else:
		return render(request, "database_api/home.html", {"name":id, "id":id})

def secret_code(request, scode):
	if(scode == "bspr"):
		return render(request, "database_api/home.html", {"name":"ruthvik"})
	else:
		return HttpResponse("<h1>Wrong code.</h1>")