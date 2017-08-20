# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, 'index.html')

def about_us(request):
    return render(request, 'about_us.html')

def about_pku(request):
    return render(request, 'about_pku.html')

def community_forums(request):
    return render(request, 'community_forums.html')

def my_account(request):
    return render(request, 'my_account.html')

def private_policy(request):
    return render(request, 'private_policy.html')

def submit_recipe(request):
    return render(request, 'submit_recipe.html')

def user_agreement(request):
    return render(request, 'user_agreement.html')

def view_recipe(request):
    return render(request, 'view_recipe.html')

def login(request):
    if request.POST:
        email = request.POST['email']
        username = request.POST['username']
        password = request.POST['password']
        user = User.objects.create_user(username=username, password=password, email=email)
        user.save()
        profile = UserProfile()
        profile.user = user

        profile.save()
        return HttpResponseRedirect('index.html')
    return render(request, 'login.html')

def edit_profile(request):
    return render(request, 'edit_profile.html')

# TODO: Might not need this. Check settings.py
def logout(request):
    return render(request, 'index.html')
