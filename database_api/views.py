from django.shortcuts import render
from django.http import HttpResponse

def index(request, id):
	if(id == "cx5607"):
		return HttpResponse("<h1>%s</h1>"%"cx-b5607-tc57-bp23-rolr2p");
	else:
		return HttpResponse("<h1>Entered id: %s</h1>"%id);