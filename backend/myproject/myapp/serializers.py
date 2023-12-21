from rest_framework import serializers
from .models import CustomUser, Image

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = CustomUser.objects.create_user(**validated_data)
        return user

class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ['id', 'title', 'description', 'image', 'user']
        read_only_fields = ['user']  # Oznaczenie 'user' jako pola tylko do odczytu

    def create(self, validated_data):
        return Image.objects.create(**validated_data)