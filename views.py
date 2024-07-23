from django.shortcuts import render
from django.http import JsonResponse

def index(request):
    return render(request, 'index.html')

def add_todo(request):
    todo_text = request.POST.get('todo_text', '')
    # Here you can save the todo_text to a database or perform any backend operations
    return JsonResponse({'success': True, 'todo_text': todo_text})
