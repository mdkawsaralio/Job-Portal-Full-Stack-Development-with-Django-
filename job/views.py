from django.shortcuts import render

# Create your views here.



def job_details(request):
    return render(request,'job_search/job_details.html')


def all_jobs(request):
    return render(request,'job_search/all_job.html')
