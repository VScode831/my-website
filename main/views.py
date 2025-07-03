from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.template import loader
from .forms import ContactForm
from django.core.mail import send_mail
from django.conf import settings
# from django.template.loader import render_to_string


# Create your views here.
def home(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            email_first_name = form.cleaned_data['contact_first_name']
            email_last_name = form.cleaned_data['contact_last_name']
            email_organization = form.cleaned_data['contact_organization']
            email_email = form.cleaned_data['contact_email']
            email_number = form.cleaned_data['contact_number']
            email_description = form.cleaned_data['contact_description']

            template = loader.render_to_string('pages/contact_email.html', {
                'first_name': email_first_name,
                'last_name': email_last_name,
                'organization': email_organization,
                'email': email_email,
                'number': email_number,
                'description': email_description
            })

            send_mail(
                'Visualution Website Contact',
                template,
                settings.EMAIL_HOST_USER,
                ['yichen.wang@visualution.co.nz'],
            )

            return HttpResponseRedirect('/thanks/')
    else:
        form = ContactForm()

    return render(request, 'main/home.html', {'form': form})


def thanks(request):
    return render(request, 'main/thanks.html')


def service_page(request):
    return render(request, 'pages/service_page.html')


def project_page(request):
    return render(request, 'pages/project_page.html')


def about_page(request):
    return render(request, 'pages/about_page.html')


def contact_page(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            email_first_name = form.cleaned_data['contact_first_name']
            email_last_name = form.cleaned_data['contact_last_name']
            email_organization = form.cleaned_data['contact_organization']
            email_email = form.cleaned_data['contact_email']
            email_number = form.cleaned_data['contact_number']
            email_description = form.cleaned_data['contact_description']

            template = loader.render_to_string('pages/contact_email.html', {
                'first_name': email_first_name,
                'last_name': email_last_name,
                'organization': email_organization,
                'email': email_email,
                'number': email_number,
                'description': email_description
            })

            send_mail(
                'Visualution Website Contact',
                template,
                settings.EMAIL_HOST_USER,
                ['yichen.wang@visualution.co.nz'],
            )

            return HttpResponseRedirect('/thanks/')
    else:
        form = ContactForm()

    return render(request, 'pages/contact_page.html', {'form': form})
