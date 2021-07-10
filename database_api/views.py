from django.shortcuts import render
from django.http import HttpResponse

def index(request):
	return HttpResponse("<h1>Database</h1>")

def login(request):
	return HttpResponse("<h1>This is the login page.</h1>")

def about(request):
	return HttpResponse("<h1>This is about page.</h1>")

def add(request):
	return HttpResponse("<h1>Sorry, you can't add any patreons.</h1>")