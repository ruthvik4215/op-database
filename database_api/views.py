from django.shortcuts import render
from django.http import JsonResponse

def home(req):
	return JsonResponse("hello", safe=False)