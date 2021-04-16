# todo/views/status_check.py


from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view


@api_view(['GET'])  # get으로 요청 시에 응답합니다. 그 외 다른 Method로 요청하면 405 코드를 반환합니다.
def status_check(request):
    """
    서버의 상태를 확인하는 함수입니다.
    """
    return Response({
        "status": "OK"
    }, status=status.HTTP_200_OK)


# todo/urls.py


from django.urls import path

from todo.views import *  # views/__init__.py 에서 status_check.py를 모듈로 선언했기에 한번에 가져올 수 있습니다.


urlpatterns = [
    path('status_check/', status_check, name='status_check'),  # /api/status_check/
]
