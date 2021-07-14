from django.urls import path
from . import views

urlpatterns = [
	path("", views.index, name="index"),
	path("<str:scode>/", views.secret_code, name="scode"),
]