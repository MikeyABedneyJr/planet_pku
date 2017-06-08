from django.conf.urls import url

from mainsite import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^about_us', views.about_us, name='about_us'),
    url(r'^about_pku', views.about_pku, name='about_pku'),
    url(r'^community_forums', views.community_forums, name='community_forums'),
    url(r'^my_account', views.my_account, name='my_account'),
    url(r'^private_policy', views.private_policy, name='private_policy'),
    url(r'^submit_recipe', views.submit_recipe, name='submit_recipe'),
    url(r'^user_agreement', views.user_agreement, name='user_agreement'),
    url(r'^view_recipe', views.view_recipe, name='view_recipe'),
    url(r'^login', views.login, name='login'),
    url(r'^register', views.register, name='register'),
]