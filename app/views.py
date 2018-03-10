from django.shortcuts import render
from rest_framework.response import Response#handles the response for the API requests
from rest_framework.views import APIView#base class for our API view function
from .serializers import DictSerializer


# Create your views here.
def index(request):
	return render(request, "index.html")

