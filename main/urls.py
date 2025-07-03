from django.urls import path
from . import views

app_name = 'main'
urlpatterns = [
    path('', views.home, name='home'),
    path('thanks/', views.thanks, name='thanks'),
    path('service/', views.service_page, name='service'),
    path('project/', views.project_page, name='project'),
    path('about/', views.about_page, name='about'),
    path('contact/', views.contact_page, name='contact'),
]
