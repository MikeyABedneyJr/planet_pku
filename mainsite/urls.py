from django.conf.urls import url

from . import views

# Todo: add other views - about_pku is template
urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^about_pku', views.about_pku, name='about_pku'),
]