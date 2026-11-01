from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('all-jobs/',views.all_jobs,name='all-jobs'),
    path('job-details/',views.job_details,name='job-details'),
]



