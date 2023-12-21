from rest_framework import generics, viewsets, permissions
from .models import CustomUser, Image
from .serializers import UserSerializer, ImageSerializer

class CreateUserView(generics.CreateAPIView):
    model = CustomUser
    serializer_class = UserSerializer

from django.contrib.auth import authenticate
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import UserSerializer

class LoginView(APIView):
    def post(self, request, *args, **kwargs):
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(username=username, password=password)
        if user:
            return Response(UserSerializer(user).data)
        return Response({'error': 'Niepoprawne dane logowania'}, status=status.HTTP_400_BAD_REQUEST)
    
class ImageViewSet(viewsets.ModelViewSet):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer
    permission_classes = [permissions.IsAuthenticated] # Ensure only authenticated users can upload

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def get_queryset(self):
        # Optionally, filter images to only show those uploaded by the logged-in user
        return Image.objects.filter(user=self.request.user)